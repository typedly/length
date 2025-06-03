/**
 * @description Represents the length object parameters.
 * @export
 * @interface Length
 * @template {number | undefined} [Value=number | undefined] The actual length, also between min and max.
 * @template {number | undefined} [Min=number | undefined] The minimum length.
 * @template {number | undefined} [Max=number | undefined] The maximum length.
 */
export interface Length<
  Value extends number | undefined = number | undefined,
  Min extends number | undefined = number | undefined,
  Max extends number | undefined = number | undefined,
  Unit extends string | undefined = string | undefined
> {
  /**
   * @description Represents the maximum length.
   * @type {Max}
   */
  max: Max;

  /**
   * @description Represents the minimum length.
   * @type {Min}
   */
  min: Min;

  /**
   * @description Represents optional unit of the length, e.g. "cm", "m", "km", "in", "ft", etc.
   * @type {?Unit}
   */
  unit?: Unit;

  /**
   * @description Represents the actual measured length, also between min and max.
   * @type {Value}
   */
  value: Value;
}
