import multer from 'multer';
import cloudinary from 'cloudinary';
import { v2 as cloudinaryV2 } from 'cloudinary';
import { Readable } from 'stream';

// Configure Cloudinary
cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware for uploading images to Cloudinary
const uploadMiddleware = async (req, res, next) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      console.error('Multer Error:', err);
      return res.status(400).json({ message: 'Image upload failed', error: err });
    }

    // If no file, just continue (for updates without new image)
    if (!req.file) {
      return next(); // image na ho toh bhi aage badhe
    }

    const uploadStream = cloudinaryV2.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary Error:', error);
          return res.status(400).json({ message: 'Image upload failed', error });
        }
        req.body.image = result.secure_url;
        next();
      }
    );

    if (req.file.buffer) {
      const stream = Readable.from(req.file.buffer);
      stream.pipe(uploadStream);
    } else if (req.file.stream) {
      req.file.stream.pipe(uploadStream);
    } else {
      return res.status(400).json({ message: 'File stream not found' });
    }
  });
};

export default uploadMiddleware;

