import { pancakeBakerServiceClient } from "./generated/PancakeServiceClientPb";
import { BakeRequest, Pancake } from "./generated/pancake_pb";
import { useCallback } from "react";


export const usePancake = (client: pancakeBakerServiceClient) => {  
    const bakeSubmit = useCallback(() => {
      const req = new BakeRequest()
      req.setMenu(Pancake.Menu.BACON_AND_CHEESE)
      client.bake(req, null)
    }, [])
      
    return {
      bakeSubmit
    };
  };