const File = require("../models/File");

// Get all files
exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new file
exports.createFile = async (req, res) => {
  const file = new File({
    name: req.body.name,
    content: req.body.content,
  });

  try {
    const newFile = await file.save();
    res.status(201).json(newFile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing file
exports.updateFile = async (req, res) => {
  try {
    const updatedFile = await File.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        content: req.body.content,
      },
      { new: true }
    );

    if (!updatedFile) {
      return res.status(404).json({ message: "File not found" });
    }

    res.json(updatedFile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a file
exports.deleteFile = async (req, res) => {
  try {
    const deletedFile = await File.findByIdAndDelete(req.params.id);
    if (!deletedFile) {
      return res.status(404).json({ message: "File not found" });
    }
    res.json({ message: "File deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
