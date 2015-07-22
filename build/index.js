
/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
	if (!Array.isArray(list) || !list.length) {
		return false;
	}

	return list.every(function (item) {
		return typeof item === "string";
	});
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
	if (map == null) {
		return false;
	}

	return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
	return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
	list = castArray(list);

	return list.map(function (item) {
		return isKeyValueMap(item) ? item : {
			key: item,
			value: item
		};
	});
}
