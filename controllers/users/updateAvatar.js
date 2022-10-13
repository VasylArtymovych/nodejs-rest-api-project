const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { users: operations } = require("../../services");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const extention = originalname.split(".").pop();
  const imageName = `${_id}.${extention}`;
  try {
    const resizeImg = await Jimp.read(tempUpload);
    resizeImg
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(tempUpload);

    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatars", imageName);
    await operations.updateAvatar(_id, avatarURL);

    res.status(200).json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
