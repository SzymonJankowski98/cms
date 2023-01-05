import { Schema } from "mongoose";

export interface IPage{
    _id: string;
    name: string;
};
  
export const pageSchema = new Schema<IPage>({
    _id: {type: String, required: true},
    name: { type: String, required: false}
});