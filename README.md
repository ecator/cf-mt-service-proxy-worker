一个代理Map Tiles的cloudflare worker，目前主要是代理Google，部署后需要设置环境变量`SUB_PATHS`用于验证，请求地址如下：

```
https://workder-domain/google/your_sub_path/xxxxx
```

`your_sub_path`就是`SUB_PATHS`的一个值，用半角逗号分隔。