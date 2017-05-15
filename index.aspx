<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Analysis.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Risk Analysis</title>
    <link href="styles/main.css" rel="stylesheet" />
    <script src="script/jquery-1.7.1.js"></script>
    <script src="script/script.js"></script>
</head>
<body onload="init();">
    <form id="form1" runat="server">
    <div id="title">
        <h1>Add Risk Analysis</h1>
    </div>

    <div id="subTitle">
        <p>Does generator provision meet engineering standards?</p>
    </div>
    <main>
        <section>
            <!--Field 1-->
            <asp:Label CssClass="label" ID="probabilityLbl" runat="server" Text="Probability: "></asp:Label>

            <!--Field 2-->
            <asp:Label CssClass="label" ID="severityLbl" runat="server" Text="Severty: "></asp:Label>
            
            <!--Field 3-->
            <asp:Label CssClass="label" ID="riskResultLbl" runat="server" Text="Risk Result: "></asp:Label>

            <!--Field 4-->
            <asp:Label CssClass="label" ID="reputationalRiskLbl" runat="server" Text="Reputational Risk: "></asp:Label>

            <!--Field 5-->
            <asp:Label CssClass="label" ID="regularotyLbl" runat="server" Text="Regulatory? "></asp:Label>


            <!--Field 6-->
            <asp:Label CssClass="label" ID="riskStatusLbl" runat="server" Text="Risk Status:"></asp:Label>
        </section>

        <section>
            <!--Field 1 options-->
            <select class="userInput" id="probabiltyInput">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <!--Field 2 options-->
            <select class="userInput" id="severityInput">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <!--Field 3 options-->
            <asp:TextBox CssClass="userInput" ID="riskResultInput" runat="server" columns="30"></asp:TextBox>

            <!--Field 4 options-->
            <select class="userInput" id="reptutationalRiskInput">
                <option value="riskHigh">High - Global</option>
                <option value="riskMedium">Medium - Regional</option>
                <option value="riskLow">Low - Local</option>
            </select>

            <!--Field 5 options-->
            <select class="userInput" id="regulatoryInput">
                <option value="NotAnnounced">N/A</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <!--Field 6 options-->
            <select class="userInput" id="statusInput" onclick="colorSelect();">
                <option value="red">Red</option>
                <option value="amber">Amber</option>
                <option value="green">Green</option>
            </select>
        </section>

        <div class="clear"></div>
        <section id="different">
            <input class="btn" type="button" value="Previews"/> 
            <input class="btn" type="button" value="Next"/> 
            <input class="btn" type="button" value="Save" onclick="validate();"//> 
            <input class="btn" type="button" value="Submit"/> 
            

        </section>
        

    </main>

    </form>
</body>
</html>
