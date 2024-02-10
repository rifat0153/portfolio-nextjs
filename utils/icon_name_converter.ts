// logos:jest will be converted to i-[logos-light--jest]
export const ConverterToDynamicIconifyName = (name: string) => {
  var slices = name.split(':');
  var icon = slices[1];
  var prefix = slices[0];

  return 'i-[' + prefix + '--' + icon + ']';
};

// name = 'mdi-light:home' or 'mdi:home'
// return 'i-mdi-light-home' or 'i-mdi-home'
export const ConverterToEgoistIconName = (name: string): string => {
  var slices = name.split(':');
  var icon = slices[1];
  var prefix = slices[0];

  return 'i-' + prefix + '-' + icon;
};
