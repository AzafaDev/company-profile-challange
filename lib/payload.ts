import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config"
export async function getPayloadClient(){
    return getPayloadHMR({config})
}