/**
 * @description creating a module extending iTalkApp
 */
angular.module('iTalkApp.commonUtil', [])
    .service('commonUtils', function() {
        return {
            // ** To check null, empty and undefined for any variables value *//*
            nullable: function(value) {
                if (value !== null && value !== undefined && value !==
                    '') {
                    return !0;
                } else {
                    return !1;
                }
            }
        };
    });
