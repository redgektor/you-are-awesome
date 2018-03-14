// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
	Object.defineProperty(this, propertyName, { enumerable: true });
	return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
	Object.defineProperty(Object.prototype, propertyName, { value: 'value', enumerable: false });
	return propertyName;
};
const createProtoMagicObject = () => {};

var i = 0;
const incrementor = () => {
	i++;
	return incrementor;
};
incrementor.valueOf = function() {
	return i;
}
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
