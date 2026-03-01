"use client"

import React from "react"

const RightNav: React.FC = () => {
	return (
		<aside style={styles.container} aria-label="Patient details">
			<div style={styles.profileCard}>
				<img src="/avatar4.jpg" alt="Jessica Taylor" style={styles.avatar} onError={(e)=>{(e.target as HTMLImageElement).src='/default-avatar.png'}}/>
				<h3 style={styles.title}>Jessica Taylor</h3>
				<p style={styles.subtitle}>Female, 28</p>

				<ul style={styles.detailList}>
					<li><strong>Date Of Birth:</strong> August 23, 1996</li>
					<li><strong>Contact Info:</strong> (415) 555-1234</li>
					<li><strong>Emergency:</strong> (415) 555-5678</li>
					<li><strong>Insurance:</strong> Sunrise Health Assurance</li>
				</ul>

				<button style={styles.showBtn}>Show All Information</button>
			</div>

			<div style={styles.resultsCard}>
				<h4 style={{margin:0, marginBottom:12}}>Lab Results</h4>
				<ul style={styles.resultsList}>
					<li style={styles.resultItem}>Blood Tests <span style={styles.download}>⬇️</span></li>
					<li style={styles.resultItem}>CT Scans <span style={styles.download}>⬇️</span></li>
					<li style={styles.resultItem}>Radiology Reports <span style={styles.download}>⬇️</span></li>
					<li style={styles.resultItem}>X-Rays <span style={styles.download}>⬇️</span></li>
				</ul>
			</div>
		</aside>
	)
}

const styles: { [k: string]: React.CSSProperties } = {
	container: {
		width: 320,
		display: "flex",
		flexDirection: "column",
		gap: 16,
		padding: 18,
		background: "#fff",
	},
	profileCard: {
		background: "#fff",
		borderRadius: 12,
		padding: 16,
		boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: 8,
	},
	avatar: {
		width: 110,
		height: 110,
		borderRadius: 999,
		objectFit: "cover",
	},
	title: { margin: 0, fontSize: 18 },
	subtitle: { margin: 0, color: "#6b7280" },
	detailList: {
		listStyle: "none",
		padding: 0,
		marginTop: 12,
		width: "100%",
		color: "#374151",
		fontSize: 13,
		display: "grid",
		gap: 8,
	},
	showBtn: {
		marginTop: 8,
		background: "#00d1b2",
		color: "#fff",
		padding: "10px 14px",
		borderRadius: 999,
		border: "none",
		cursor: "pointer",
	},
	resultsCard: {
		background: "#fff",
		borderRadius: 12,
		padding: 12,
		boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
	},
	resultsList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 },
	resultItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 6px", borderRadius: 8, background: "#f8fafc" },
	download: { color: "#0f1724" },
}

export default RightNav

