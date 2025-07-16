import postcssImport from "postcss-import";
import postcssMixins from "postcss-mixins";
import postcssPresetEnv from "postcss-preset-env";
import postcssDiscardComments from "postcss-discard-comments";

export default {
  plugins: [
    postcssImport(),
    postcssMixins(),
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
      browsers: ["last 2 versions"],
    }),
    postcssDiscardComments(),
  ],
};
