import { type SchemaTypeDefinition } from "sanity";
import { Mouses } from "../schema/Mouses";
import { GamingPC } from "../schema/GamingPC";
import { GamingLaptop } from "../schema/GamingLaptop";
import { GamingMonitor } from "../schema/GamingMonitor";
import { GamingKeyboard } from "../schema/GamingKeyboard";
import { otheracc } from "../schema/otheracc";
import { GamingMousepad } from "../schema/GamingMousepad";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Mouses,
    GamingPC,
    GamingLaptop,
    GamingMonitor,
    GamingKeyboard,
    otheracc,
    GamingMousepad,
  ],
};
