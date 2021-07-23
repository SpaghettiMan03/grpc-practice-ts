import React from 'react';
import { GRPCClients } from './gRPCClients';
import { usePancake } from './GrpcHooks';

type Props = {
  clients: GRPCClients
} 

const GrpcButton: React.FC<Props> = ({clients}) => {
  const {bakeSubmit} = usePancake(clients.pancakeBakerServiceClient)
    return (
      <>
        <button onClick={bakeSubmit}>
          Activate Lasers
        </button>
      </>
    );
  };
  
  export default GrpcButton;