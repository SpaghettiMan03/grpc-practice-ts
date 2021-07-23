import { pancakeBakerServiceClient } from "./generated/PancakeServiceClientPb";
import { BakeRequest, BakeResponse, Pancake } from "./generated/pancake_pb";
import { useCallback, useState } from "react";


export const usePancake = (client: pancakeBakerServiceClient) => {  
    const [pancake, setPancake] = useState<Pancake>()

    const bakeSubmit = useCallback( async () => {
      try {
        const req = new BakeRequest()
        req.setMenu(Pancake.Menu.BACON_AND_CHEESE)
        const response: BakeResponse = await client.bake(req, null)
        setPancake(response.getPancake())
      } catch (e) {
        console.log(e)
      }
    }, [client])

    const decideMenu = (menu: Pancake.Menu | undefined) => {
      switch (menu) {
        case 0: 
          return "UNKNOWN"
        case 1: 
          return "CLASSIC"
        case 2: 
          return "BANANA_AND_WHIP"
        case 3: 
          return "BACON_AND_CHEESE"
        case 4: 
          return "MIX_BERRY"
        case 5: 
          return "BAKED_MARSHMALLOW"
        case 6: 
          return "SPICY_CURRY"
        default:
          return undefined
      }
    }
      
    return {
      pancake,
      decideMenu,
      bakeSubmit,
    };
  };