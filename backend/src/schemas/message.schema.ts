import * as yup from "yup";
import { SchemaOf } from "yup";
import { IMessageRequest, IMessageResponse, IMessageUpdate } from "../interfaces/messages";
import { userMessengerSchema } from "./user.schemas";

export const newMessageSchema: SchemaOf<IMessageRequest> = yup.object().shape({
    message: yup.string().min(2).required(),
    direct: yup.boolean().required(),
    receiver: yup.string().required()

});

export const updateMessageSchema: SchemaOf<IMessageUpdate> = yup.object().shape({
    message: yup.string()
});

export const messageResponseSchema: SchemaOf<IMessageResponse> = yup.object().shape({
    updatedAt: yup.date(),
    createdAt: yup.date(),
    message: yup.string(),
    receiver: yup.string(),
    direct: yup.boolean(),
    id: yup.string(),
    user: userMessengerSchema
});

export const messageListSchema: SchemaOf<IMessageResponse[]> = yup.array(
    yup.object().shape({
        updatedAt: yup.date(),
        createdAt: yup.date(),
        message: yup.string(),
        receiver: yup.string(),
        direct: yup.boolean(),
        id: yup.string(),
        user: userMessengerSchema
    })
);