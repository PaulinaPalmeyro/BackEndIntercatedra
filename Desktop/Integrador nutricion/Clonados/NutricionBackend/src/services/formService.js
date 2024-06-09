const FormData = require('../models/formData');

const createFormData = async (data) => {
  const formData = new FormData(data);
  return await formData.save();
};

const getAllFormData = async () => {
  return await FormData.find();
};

module.exports = {
  createFormData,
  getAllFormData
};
