import { readdirSync } from "node:fs";
export type EndpointExtendConfigPrototype = ("RemoteConfig" | "isUDP" | "RemoteConfigUserspec" | "ForcedWS0RTT")

export type EndpointPrototype = {
    key: string;
    value: string;
    ExtendConfig?: EndpointExtendConfigPrototype[]
}

const AvalibleEndpoints: EndpointPrototype[] = [
    {
        key: "Sing Box",
        value: "/sub/sing-box",
        ExtendConfig: ["RemoteConfig", "RemoteConfigUserspec", "isUDP", "ForcedWS0RTT"]
    },
    {
        key: "Clash Meta",
        value: "/sub/clash-meta",
        ExtendConfig: ["RemoteConfig", "RemoteConfigUserspec", "isUDP", "ForcedWS0RTT"]
    },
    {
        key: "Clash",
        value: "/sub target=clash",
        ExtendConfig: ["RemoteConfig", "RemoteConfigUserspec", "isUDP", "ForcedWS0RTT"]
    },
    {
        key: "Base 64",
        value: "/sub/base64"
    },
    {
        key: "Share Link 集合",
        value: "/sub/share-link"
    }
]

const AvalibleEndpointsPath = AvalibleEndpoints.map(i => i.value);
const TestingEndpointsPath = readdirSync("./functions/sub/").map(i => `/sub/${i.replace(/\.js$/, "")}`).filter(i => !AvalibleEndpointsPath.includes(i));
let TestingEndpoints: EndpointPrototype[] = [];
for (let i of TestingEndpointsPath) {
    TestingEndpoints.push({
        key: `${i} (Experimental)`,
        value: i
    })
}

export const Endpoints: EndpointPrototype[] = [...AvalibleEndpoints, ...TestingEndpoints]
