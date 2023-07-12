import axios from "axios";

export default class RequestController {
  static async generateAdivce(req, res) {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice",);

      res.status(200).json({
        status: "success",
        message: "Advice generated successfully",
        data
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "server error"})
    }
  }
}
