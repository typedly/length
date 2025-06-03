import { LengthSettings } from "./length-settings.interface";
/**
 * @description Alias for `LengthSettings`, used to define a length configuration, saved settings.
 * @export
 * @interface LengthConfiguration
 * @template {number | undefined} [Value=number | undefined] 
 * @template {number | undefined} [Min=number | undefined] 
 * @template {number | undefined} [Max=number | undefined] 
 * @extends {LengthSettings<Value, Min, Max>}
 */
export interface LengthConfiguration<
  Value extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined
> extends LengthSettings<Value, Min, Max> {}
