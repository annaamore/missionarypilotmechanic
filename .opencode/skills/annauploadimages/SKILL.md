---
name: annauploadimages
description: Use ONLY when the user says "upload images", "process images", "anna upload", or similar. Processes images by resizing, converting to JPG, organizing originals, and prompting for renaming before finalizing.
---

# annauploadimages

Before starting, check if `PROJECT_ROOT` is set. If not, ask the user: "What is the full path to your project root?" and use their answer. Default to the current working directory if they skip.

Let `UPLOAD_DIR="$PROJECT_ROOT/upload"` and `IMAGES_DIR="$PROJECT_ROOT/images"`.

1. List files in `$UPLOAD_DIR` — non-recursive, skip directories.

2. For each image file in that directory:
   - Extract the basename (without extension) and the original extension.
   - Convert to JPG, resize to max width 3000px, set DPI to 72 using:
     ```
     sips -s format jpeg -Z 3000 -s dpiHeight 72 -s dpiWidth 72 "$file" --out "$UPLOAD_DIR/$basename.jpg"
     ```
   - Create `$UPLOAD_DIR/originals/` if it doesn't exist.
   - Move the original file to `$UPLOAD_DIR/originals/$basename.$original_ext`.
   - Create `$UPLOAD_DIR/needtoupload/` if it doesn't exist.
   - Move the new JPG to `$UPLOAD_DIR/needtoupload/$basename.jpg`.

3. List the files in `$UPLOAD_DIR/needtoupload`. For **each** file, one at a time:
   - Ask the user: "Rename `$filename`? (press Enter to keep, or type new name)" — use the `question` tool, showing the current name as context.
   - If they provide a new name:
     - Rename the file in `needtoupload` to `$newname.jpg`.
     - Look up the corresponding original in `originals/` (match by the original basename, preserving the original extension like .heic, .png, etc.) and rename it to `$newname.$original_ext`.

4. Move all files from `$UPLOAD_DIR/needtoupload/` to `$IMAGES_DIR/`.

5. Tell the user: "ready to commit and push"
