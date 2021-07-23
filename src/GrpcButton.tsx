import React from 'react';
import { GRPCClients } from './gRPCClients';
import { usePancake } from './GrpcHooks';
import { Pancake } from "./generated/pancake_pb";

type Props = {
  clients: GRPCClients
} 

const GrpcButton: React.FC<Props> = ({clients}) => {
  const {pancake,decideMenu, bakeSubmit} = usePancake(clients.pancakeBakerServiceClient)
    return (
      <>
        <button onClick={bakeSubmit}>
          Activate Lasers
        </button>
        シェフ: {pancake?.getChefName()}
        メニュー: {decideMenu(pancake?.getMenu())}
        テクニカルスコア: {pancake?.getTechnicalScore()}
        秒: {pancake?.getCreateTime().getSeconds()}
        なの: {pancake?.getCreateTime().getNanos()}
      </>
    );
  };
  
  export default GrpcButton;