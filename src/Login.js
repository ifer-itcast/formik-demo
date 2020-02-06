import React from 'react';
import { WingBlank } from 'antd-mobile';

// #1 导入
import { withFormik } from 'formik';

import styles from './index.module.css';
class Login extends React.Component {
	render() {
		// #5 通过 props 获取高阶组件提供的状态（属性和方法），handleChange 是高阶组件自带的，可以打印 this.props 查看
		const { values, handleSubmit, handleChange } = this.props;
		// #6 替换 state 中的 username 为 values.username，自身的 this.handleSubmit、this.handleChange 都替换成高阶组件提供的
		return (
			<WingBlank>
				<form onSubmit={handleSubmit}>
					<div className={styles.formItem}>
						<input
							className={styles.input}
							onChange={handleChange}
							name="username"
							value={values.username}
							placeholder="请输入账号"
						/>
					</div>
					{/* 长度为5到8位，只能出现数字、字母、下划线 */}
					{/* <div className={styles.error}>账号为必填项</div> */}
					<div className={styles.formItem}>
						<input
							className={styles.input}
							onChange={handleChange}
							name="password"
							type="password"
							value={values.password}
							placeholder="请输入密码"
						/>
					</div>
					{/* 长度为5到12位，只能出现数字、字母、下划线 */}
					{/* <div className={styles.error}>账号为必填项</div> */}
					<div className={styles.formSubmit}>
						<button className={styles.submit} type="submit">
							登 录
						</button>
					</div>
				</form>
			</WingBlank>
		);
	}
}

// #2 withFormik 调用返回的是一个高阶组件，这种写法方便传值，然后再包装 Login，并为 Login 提供相关状态（属性和方法）
Login = withFormik({
	// #3 为组件提供状态
	mapPropsToValues: () => ({ username: '', password: '' }),
	// #4 表单的提交事件
	handleSubmit: (values, { props }) => {
		// 内部已经阻止了默认行为（跳转），props 中可以获取路由相关的信息
		// #7 获取表单中的数据
		const { username, password } = values;

		console.log(username, password, props);
	}
})(Login);
export default Login;
