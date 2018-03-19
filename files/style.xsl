<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" encoding="utf-8" indent="yes" />
		
		<xsl:template match="para">
		    <p>
		        <xsl:apply-templates select="@*|node()"/>
		    </p>
		</xsl:template>
		
		<xsl:template match="title">
		    <h2>
		        <xsl:apply-templates select="@*|node()"/>
		    </h2>
		</xsl:template>
		
		<xsl:template match="section">
		    <h3>
		        <xsl:apply-templates select="@*|node()"/>
		    </h3>
		</xsl:template>
		
		<xsl:template match="@*|node()">
		    <xsl:copy>
		        <xsl:apply-templates select="@*|node()"/>
		    </xsl:copy>
		</xsl:template>

</xsl:stylesheet>