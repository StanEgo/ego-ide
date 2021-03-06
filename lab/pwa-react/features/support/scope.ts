import * as puppeteer from "puppeteer";

import { ApiServer } from "../../server";
import { StorageService } from "../../server/StorageService";

export interface IContext {
  currentPage?: puppeteer.Page;
  storage?: StorageService | null;
  server?: ApiServer | null;
}

export interface IScope {
  context: IContext;
  host: string;

  driver: typeof puppeteer;
  browser?: puppeteer.Browser;
}

const obj: IScope = {} as IScope;

export default obj;
