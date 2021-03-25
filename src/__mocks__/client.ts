import { JSDOM } from 'jsdom';

const globalAny: any = global;

const dom = new JSDOM();
globalAny.document = dom.window.document;
globalAny.window = dom.window;
