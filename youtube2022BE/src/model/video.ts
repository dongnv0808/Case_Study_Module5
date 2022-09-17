import { model, Schema } from "mongoose";

interface IVideo {
    name: string,
    view: number,
    description: string,
    like: number,
    disLike: number,
    dateCreate: Date
}

const videoSchema = new Schema<IVideo>({
    name: String,
    view: Number,
    description: String,
    like: Number,
    disLike: Number,
    dateCreate: Date
})

const Video = model<IVideo>("videos", videoSchema);

export {Video};