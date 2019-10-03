import { classToPlain, plainToClass } from "class-transformer";
import { IUserAccount } from '@suite/interfaces';

export const getPlain = (clazz: any) => {
  return Object.getOwnPropertyDescriptors(clazz)
}
// let photo = classToPlain(photo, { excludePrefixes: ["_"] });


// import "reflect-metadata";

// import { UserAccount } from '@suite/entities';
// import { plainToClass } from "class-transformer";

// console.log(UserAccount)
// const jsonMetadataKey = "jsonProperty";
// export interface IJsonMetaData {
//   name?: string
// }
// export function JsonProperty(metadata: string): any {
//   return Reflect.metadata(jsonMetadataKey, <IJsonMetaData>{
//     name: metadata
//   });
// }

// export function getClazz(target: any, propertyKey: string): any {
//   return Reflect.getMetadata("design:type", target, propertyKey)
// }
// export function getJsonProperty<T>(target: any, propertyKey: string): IJsonMetaData<T> {
//   return Reflect.getMetadata(jsonMetadataKey, target, propertyKey);
// }
// export class MapUtils {
//   static isPrimitive(obj) {
//     switch (typeof obj) {
//       case "string":
//       case "number":
//       case "boolean":
//         return true;
//     }
//     return !!(obj instanceof String || obj === String ||
//       obj instanceof Number || obj === Number ||
//       obj instanceof Boolean || obj === Boolean);
//   }

//   static isArray(object) {
//     if (object === Array) {
//       return true;
//     } else if (typeof Array.isArray === "function") {
//       return Array.isArray(object);
//     }
//     else {
//       return !!(object instanceof Array);
//     }
//   }

//   static deserialize<T>(clazz: { new(): T }, jsonObject) {
//     if ((clazz === undefined) || (jsonObject === undefined)) return undefined;
//     const obj = new clazz();
//     Object.keys(obj).forEach((key) => {
//       const propertyMetadataFn: (IJsonMetaData) => any = (propertyMetadata) => {
//         const propertyName = propertyMetadata.name || key;
//         const innerJson = jsonObject ? jsonObject[propertyName] : undefined;
//         const clazz = getClazz(obj, key);
//         if (MapUtils.isArray(clazz)) {
//           let metadata = getJsonProperty(obj, key);
//           if (metadata.clazz || MapUtils.isPrimitive(clazz)) {
//             if (innerJson && MapUtils.isArray(innerJson)) {
//               return innerJson.map(
//                 (item) => MapUtils.deserialize(metadata.clazz, item)
//               );
//             } else {
//               return undefined;
//             }
//           } else {
//             return innerJson;
//           }

//         } else if (!MapUtils.isPrimitive(clazz)) {
//           return MapUtils.deserialize(clazz, innerJson);
//         } else {
//           return jsonObject ? jsonObject[propertyName] : undefined;
//         }
//       };

//       let propertyMetadata = getJsonProperty(obj, key);
//       if (propertyMetadata) {
//         obj[key] = propertyMetadataFn(propertyMetadata);
//       } else {
//         if (jsonObject && jsonObject[key] !== undefined) {
//           obj[key] = jsonObject[key];
//         }
//       }
//     });
//     return obj;
//   }
// }