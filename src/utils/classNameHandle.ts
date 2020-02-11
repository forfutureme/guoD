/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 15:01:46
 * @Desc: className 的一些处理方法
 */
/**
 * 拼接多个参数为一个className
 * @param names string
 * @return string
 */
export const joinClassName = (...names: (string | undefined)[]): string => {
  return names.filter(Boolean).join(' ')
}

/**
 * 添加class前缀的工厂方法
 * @param fix string
 */
export const prefixClass = (
  fix: string | undefined
): ((name?: string) => string) => {
  return (...names: (string | undefined)[]): string => {
    return [fix, ...names].filter(Boolean).join('-')
  }
}
