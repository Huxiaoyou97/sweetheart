import {Ref} from "vue";
import {GlobalTheme, GlobalThemeOverrides} from "./interface";
import {ButtonTheme} from "../../src/button/__styles__/light";
import {AvatarTheme} from "../../src/avatar/styles";

export interface GlobalThemeWithoutCommon {
    Button?: ButtonTheme,
    Avatar?: AvatarTheme,
}

export interface ConfigProviderInjection {
    mergedThemeRef: Ref<GlobalTheme | undefined>
    mergedThemeOverridesRef: Ref<GlobalThemeOverrides | undefined>
}
