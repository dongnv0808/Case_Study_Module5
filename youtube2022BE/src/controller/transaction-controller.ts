// Quản lý giao dịch
import { Request, Response } from 'express';
import {Video} from '../model/video';
import moment, { isDate } from 'moment';

class VideoController {
    getAllVideo = async(req: any, res: any) => {
        try {
            let videos = await Video.find()
            res.status(200).json(videos);
        }catch {
            throw new Error('lỗi get Video!')
        }
    };

    addVideo = async(req: any, res: any) => {
        try {
            let video = req.body;
            new Date(video.time);
            await Video.create(video);
            res.status(200).json(video);
        }catch (err) {
            console.log(err);
        }
    }



    deleteVideo = async (req: Request, res: Response) => {        
        try {
            let id = req.params.id;
            let video = await Video.findById(id);
            video.delete()
            res.status(204).json();
        }catch(err) {
            console.log(err);
            // throw new Error('lỗi xoá Video!')
        }
    }
}

export default new VideoController();