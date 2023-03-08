package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class appDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String appname;
	private String appmailid;
	private long appphno;
	private String rdrestype;
	private String streetname;
	private String rdtype;
	private int totwidth;
	private int totlength;
	private int tspwidth;
	private int splpurpwidth;
	public appDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public appDetails(int id, String appname, String appmailid, long appphno, String rdrestype, String streetname,
			String rdtype, int totwidth, int totlength, int tspwidth, int splpurpwidth) {
		super();
		this.id = id;
		this.appname = appname;
		this.appmailid = appmailid;
		this.appphno = appphno;
		this.rdrestype = rdrestype;
		this.streetname = streetname;
		this.rdtype = rdtype;
		this.totwidth = totwidth;
		this.totlength = totlength;
		this.tspwidth = tspwidth;
		this.splpurpwidth = splpurpwidth;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAppname() {
		return appname;
	}
	public void setAppname(String appname) {
		this.appname = appname;
	}
	public String getAppmailid() {
		return appmailid;
	}
	public void setAppmailid(String appmailid) {
		this.appmailid = appmailid;
	}
	public long getAppphno() {
		return appphno;
	}
	public void setAppphno(long appphno) {
		this.appphno = appphno;
	}
	public String getRdrestype() {
		return rdrestype;
	}
	public void setRdrestype(String rdrestype) {
		this.rdrestype = rdrestype;
	}
	public String getStreetname() {
		return streetname;
	}
	public void setStreetname(String streetname) {
		this.streetname = streetname;
	}
	public String getRdtype() {
		return rdtype;
	}
	public void setRdtype(String rdtype) {
		this.rdtype = rdtype;
	}
	public int getTotwidth() {
		return totwidth;
	}
	public void setTotwidth(int totewidth) {
		this.totwidth = totewidth;
	}
	public int getTotlength() {
		return totlength;
	}
	public void setTotlength(int totlength) {
		this.totlength = totlength;
	}
	public int getTspwidth() {
		return tspwidth;
	}
	public void setTspwidth(int tspwidth) {
		this.tspwidth = tspwidth;
	}
	public int getSplpurpwidth() {
		return splpurpwidth;
	}
	public void setSplpurpwidth(int splpurpwidth) {
		this.splpurpwidth = splpurpwidth;
	}
}