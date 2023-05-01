import * as yup from "yup";
import { SchemaOf } from "yup";
import { IChannelRequest, IChannelResponse, IChannelUpdate } from "../interfaces/channels";

export const newChannelSchema: SchemaOf<IChannelRequest> = yup.object().shape({
    name: yup.string().min(2).max(100).required()
});

export const updateChannelSchema: SchemaOf<IChannelUpdate> = yup.object().shape({
    name: yup.string()
});

export const channelResponseSchema: SchemaOf<IChannelResponse> = yup.object().shape({
    name: yup.string(),
    id: yup.string()
});

export const channelListSchema: SchemaOf<IChannelResponse[]> = yup.array(
    yup.object().shape({
        name: yup.string(),
        id: yup.string()
    })
);