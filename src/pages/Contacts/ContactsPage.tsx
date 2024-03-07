import { Box, CardMedia, Typography } from "@mui/material";
import { contactsPageText } from "../../util/texts";
import humanImage from "../../../pictures/humanAtTheLaptopPicture.png";
import telegram from "../../../pictures/Telegram.png";
import vk from "../../../pictures/vk.png";
import github from "../../../pictures/github.png";
import instagram from "../../../pictures/instagram.png";
import x from "../../../pictures/x.png";

const gitHubLink: string = "https://github.com/artem-puchkov/user-activity-tracking";

export function ContactsPage() {
    return (
        <div style={{width: 1420, margin: "0 auto", marginTop: "70px", paddingBottom: 3}}>
            <Typography sx={{textAlign: "center", marginTop: "130px", marginBottom: "60px", fontSize: 24}}>
                <span>Исходный код проекта - </span>
                <a href={gitHubLink} style={{color: "inherit"}}>{gitHubLink}</a>
            </Typography>
            <Typography sx={{width: 750, textAlign: "center", marginTop: "60px", fontSize: 24, margin: "0 auto"}}>
                {contactsPageText}
            </Typography>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{order: 2, marginRight: "200px", marginTop: "65px"}}>
                    <Typography sx={{fontSize: 24}}>
                        Почта - artem.puchkov21@yandex.ru
                    </Typography>
                    <Typography sx={{marginTop: "35px", marginBottom: "20px", fontSize: 24}}>
                        Соц сети : 
                    </Typography>
                    <Box display={"flex"} gap={1.5}>
                        <a href="https://t.me/LaoMaoy">
                            <CardMedia component="img" image={telegram} style={{height: 29, width: 29, marginTop: 6}} alt="Телеграм"/>
                        </a>
                        <a href="https://vk.com/lmaoy">
                            <CardMedia component="img" image={vk} style={{height: 36, width: 36}} alt="Вк"/>
                        </a>
                        <a href="https://github.com/artem-puchkov">
                            <CardMedia component="img" image={github} style={{height: 36, width: 36, marginTop: 2}} alt="Гитхаб"/>
                        </a>
                        <a href="https://www.instagram.com/artem.pu4koff">
                            <CardMedia component="img" image={instagram} style={{height: 30, width: 30, marginTop: 5}} alt="Инстаграм"/>
                        </a>
                        <a href="https://twitter.com/Artem23824558">
                            <CardMedia component="img" image={x} style={{height: 38, width: 38, marginTop: 1}} alt="Икс (твиттер)"/>
                        </a>
                    </Box>
                </div>
                <CardMedia component="img" image={humanImage} style={{height: 470, width: 450}} alt="Телеграм"/>
            </div>
        </div>
    );
}