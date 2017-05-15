using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;

namespace Analysis
{
    public partial class index : System.Web.UI.Page
    {
        public static string dataPath = HttpContext.Current.Server.MapPath(".") + @"\data\";

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string LoadAnalysis(string request)
        {
            StreamReader input = new StreamReader(dataPath + "file.txt");
            string jsonString = input.ReadLine();
            input.Close();

            return jsonString;
        }

        [WebMethod]
        public static string SaveAnalysis(string request)
        {
            // do something with the C# Product object
            StreamWriter output = new StreamWriter(dataPath + "file.txt");
            output.WriteLine(request);
            output.Close();

            return "SaveAnalysis";
        }
    }
}