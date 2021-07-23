import { pancakeBakerServiceClient }  from "./generated/PancakeServiceClientPb";

export type GRPCClients = {
    pancakeBakerServiceClient: pancakeBakerServiceClient;
};

export const gRPCClients: GRPCClients = {
    pancakeBakerServiceClient: new pancakeBakerServiceClient(`http://localhost:8080`)
};