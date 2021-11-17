
import I18n from "i18n-js";

import * as RnLocalize from "react-native-localize"
import { I18nManager } from "react-native";

import en from "./en"
import tr from "./tr"

const translations ={
    tr, en
};

const locales = RnLocalize.getLocales(); //Cihazın terrcih edilen dili.

I18n.locale = locales[0].languageTag; //Dil kodu (tr,en vb.)

export const changeLanguage = language => {
    I18n.locale = language;
}



export const isRtl = locales[0].isRTL; //İlgili dilin sağdan sola yazıldığını belirtir.

I18nManager.forceRTL = isRtl; //Arayüzdeki bileşenlerin soldan sağa yerin sağdan sola yazılmasını zorunlu kılar.

I18n.fallbacks = true; //Belirtilen dile ait kayıt bulunmadığında bir sonraki dilden telafi edilmesi gerektiğini belirtir.

I18n.locales.no = "en"; //Herhangi bir sıkıntıya karşılık kullanılacak varsayılan dil.

I18n.translations = translations //Çevirmenler.

export default I18n;

