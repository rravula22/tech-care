"use client"

import React from "react"

const Header: React.FC = () => {
	return (
		<header style={styles.header}>
			<div style={styles.left}>
				<div style={styles.brand}>Tech.C</div>
				<nav style={styles.nav} aria-label="Main navigation">
					<a style={styles.link} href="#">Overview</a>
					<a style={{ ...styles.link, ...styles.activePill }} href="#">Patients</a>
					<a style={styles.link} href="#">Schedule</a>
					<a style={styles.link} href="#">Message</a>
					<a style={styles.link} href="#">Transactions</a>
				</nav>
			</div>

			<div style={styles.right}>
				<button style={styles.iconButton}>🔔</button>
				<div style={styles.user}>
					<img src="/avatar4.jpg" alt="Dr. Jose Simmons" style={styles.userAvatar} onError={(e)=>{(e.target as HTMLImageElement).src='/default-avatar.png'}}/>
					<div style={styles.userInfo}>
						<div style={styles.userName}>Dr. Jose Simmons</div>
						<div style={styles.userRole}>General Practitioner</div>
					</div>
				</div>
			</div>
		</header>
	)
}

const styles: { [k: string]: React.CSSProperties } = {
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "18px 24px",
		borderBottom: "1px solid #eef2f6",
		background: "#fff",
	},
	left: {
		display: "flex",
		alignItems: "center",
		gap: 20,
	},
	brand: {
		fontWeight: 800,
		fontSize: 20,
	},
	nav: {
		display: "flex",
		gap: 12,
		alignItems: "center",
	},
	link: {
		padding: "8px 12px",
		borderRadius: 999,
		color: "#475569",
		textDecoration: "none",
		fontWeight: 600,
		fontSize: 14,
	},
	activePill: {
		background: "#00d1b2",
		color: "#fff",
	},
	right: {
		display: "flex",
		alignItems: "center",
		gap: 12,
	},
	iconButton: {
		background: "transparent",
		border: "none",
		fontSize: 18,
		cursor: "pointer",
	},
	user: {
		display: "flex",
		alignItems: "center",
		gap: 12,
		background: "#f8fafc",
		padding: "6px 10px",
		borderRadius: 12,
	},
	userAvatar: {
		width: 40,
		height: 40,
		borderRadius: 999,
		objectFit: "cover",
	},
	userInfo: {
		display: "flex",
		flexDirection: "column",
	},
	userName: { fontWeight: 700, fontSize: 13 },
	userRole: { fontSize: 12, color: "#6b7280" },
}

export default Header

