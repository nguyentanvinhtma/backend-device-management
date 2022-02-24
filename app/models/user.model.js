module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        username: { type: String, unique: true },
        password: { type: String },
        token: { type: String },
      },
      { timestamps: true }
    );
  
    const User = mongoose.model("user", schema);
    return User;
  };
  