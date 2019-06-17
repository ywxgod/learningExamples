import { Dispatcher } from "./Dispatcher";
import { FunUtil } from "../../utils/FunUtil";

class _ActionBus extends Dispatcher{}

export const ActionBus = FunUtil.single(_ActionBus);