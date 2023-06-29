import Post from "./Post.js";
class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();

    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id  is not specified");
    }
    const post = await Post.findById(id);
    return post;
  }

  async vote({ streamerId, vote }) {
    console.log("id: ", streamerId);

    const user = await Post.findById(streamerId);

    if (!user) {
      throw new Error("User no found");
    }
    if (vote === "upvote") {
      user.upvote++;
    } else if (vote === "downvote") {
      user.downvote++;
    } else {
      throw new Error("Invalid vote value");
    }
    await user.save();
    return user;
  }
}

export default new PostService();
