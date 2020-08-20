import Cc from "./category/Cc.ts";
import Co from "./category/Co.ts";
import Ll from "./category/Ll.ts";
import Lo from "./category/Lo.ts";
import Lu from "./category/Lu.ts";
import Me from "./category/Me.ts";
import Nd from "./category/Nd.ts";
import No from "./category/No.ts";
import Pd from "./category/Pd.ts";
import Pf from "./category/Pf.ts";
import Po from "./category/Po.ts";
import Sc from "./category/Sc.ts";
import Sm from "./category/Sm.ts";
import Zl from "./category/Zl.ts";
import Zs from "./category/Zs.ts";
import Cf from "./category/Cf.ts";
import Cs from "./category/Cs.ts";
import Lm from "./category/Lm.ts";
import Lt from "./category/Lt.ts";
import Mc from "./category/Mc.ts";
import Mn from "./category/Mn.ts";
import Nl from "./category/Nl.ts";
import Pc from "./category/Pc.ts";
import Pe from "./category/Pe.ts";
import Pi from "./category/Pi.ts";
import Ps from "./category/Ps.ts";
import Sk from "./category/Sk.ts";
import So from "./category/So.ts";
import Zp from "./category/Zp.ts";

export type { Category, UnicodeItem } from "./types.ts";
import type { Category, UnicodeItem } from "./types.ts";

export const categories: Category[] = [
  "Cc",
  "Cf",
  "Co",
  "Cs",
  "Ll",
  "Lm",
  "Lo",
  "Lt",
  "Lu",
  "Mc",
  "Me",
  "Mn",
  "Nd",
  "Nl",
  "No",
  "Pc",
  "Pd",
  "Pe",
  "Pf",
  "Pi",
  "Po",
  "Ps",
  "Sc",
  "Sk",
  "Sm",
  "So",
  "Zl",
  "Zp",
  "Zs",
];

const unicode: Record<number, UnicodeItem> = {
  ...Cc,
  ...Cf,
  ...Co,
  ...Cs,
  ...Ll,
  ...Lm,
  ...Lo,
  ...Lt,
  ...Lu,
  ...Mc,
  ...Me,
  ...Mn,
  ...Nd,
  ...Nl,
  ...No,
  ...Pc,
  ...Pd,
  ...Pe,
  ...Pf,
  ...Pi,
  ...Po,
  ...Ps,
  ...Sc,
  ...Sk,
  ...Sm,
  ...So,
  ...Zl,
  ...Zp,
  ...Zs,
};

export default unicode;
