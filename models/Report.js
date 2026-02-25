const { Schema, model } = require("mongoose");

const reportSchema = new Schema({
  content: {
    type: String,
    required: [true, "Rapporter vurderingen.."],
  },
  user: {
    type: String,
    required: [true, "User must be provided.."],
  },
  connection: {
    type: String,
    required: [true, "Review connection must pe provided"],
  },
});

reportSchema.statics.publish = async (content, user, connection) => {
  const newReport = new Report({
    content: content,
    user: user,
    connection: connection,
  });
  await newReport.save();
  return;
};

const Report = model("Reports", reportSchema);

module.exports = Report;
