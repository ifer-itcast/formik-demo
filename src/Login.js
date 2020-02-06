import React from 'react';
import { WingBlank } from 'antd-mobile';
import styles from './index.module.css';
export default class Login extends React.Component {
	state = {
		username: '',
		password: ''
    };
    // 受控组件
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };
    // 提交事件
    handleSubmit = e => {
        e.preventDefault();
    };
	render() {
		const { username, password } = this.state;
		return (
			<WingBlank>
				<form onSubmit={this.handleSubmit}>
					<div className={styles.formItem}>
						<input
							className={styles.input}
							onChange={this.handleChange}
							name="username"
							value={username}
							placeholder="请输入账号"
						/>
					</div>
					{/* 长度为5到8位，只能出现数字、字母、下划线 */}
					{/* <div className={styles.error}>账号为必填项</div> */}
					<div className={styles.formItem}>
						<input
							className={styles.input}
							onChange={this.handleChange}
							name="password"
							type="password"
							value={password}
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
