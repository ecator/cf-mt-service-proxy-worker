一个代理Map Tiles的cloudflare worker，目前主要是代理Google，部署后需要设置环境变量`SUB_PATHS`用于验证，请求地址如下：

```
https://your-worker-custom-domain/google/your_sub_path/xxxxx
```

`your_sub_path`就是`SUB_PATHS`的一个值，用半角逗号分隔。

如果`your_sub_path`没有匹配上那么会统一返回404错误代码，而且环境变量`SUB_PATHS`是必须的。