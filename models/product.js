import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { APP_URL } from '../config';

const productSchema = new Schema(
    {
        id: { type: Number, required: true },
        distance: { type: Number, required: true },
        binlevel: { type: Number, required: true },
        angle: { type: Number, required: true },
    },
    { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model('Product', productSchema, 'product');
