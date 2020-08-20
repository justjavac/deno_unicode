# deno_unicode

[![tag](https://img.shields.io/github/release/justjavac/deno_unicode)](https://github.com/justjavac/deno_unicode/releases)
[![Build Status](https://github.com/justjavac/deno_unicode/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_unicode/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_unicode)](https://github.com/justjavac/deno_unicode/blob/master/LICENSE)

unicode lookup table, provides data from http://unicode.org/Public/UNIDATA/UnicodeData.txt for Deno.

## Usage

```ts
import unicode from "https://deno.land/x/unicode/mod.ts";

const code = "♥".charCodeAt(0);  // 9829
console.log(unicode[code]);
```

output:

```ts
{
  value: '2665',
  name: 'BLACK HEART SUIT',
  category: 'So',
  class: '0',
  bidirectional_category: 'ON',
  mapping: '',
  decimal_digit_value: '',
  digit_value: '',
  numeric_value: '',
  mirrored: 'N',
  unicode_name: '',
  comment: '',
  uppercase_mapping: '',
  lowercase_mapping: '',
  titlecase_mapping: '',
  symbol: '♥'
}
```

**recommend**

```ts
import Co from "https://deno.land/x/unicode/category/Co.ts";

const code = "♥".charCodeAt(0);  // 9829
console.log(Co[code]);
```

## License

[deno_unicode](https://github.com/justjavac/deno_unicode) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
