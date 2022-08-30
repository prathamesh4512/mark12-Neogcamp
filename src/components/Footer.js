import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin2 } from "react-icons-kit/icomoon/linkedin2";
export function Footer() {
  return (
    <footer class="footer">
      <p class="footer-copyright">© | 2022 | Prathamesh</p>
      <ul class="no-list-style horizontal-list text-center">
        <li>
          <a
            class="link"
            target="_blank"
            href="https://www.linkedin.com/in/prathameshsawant20/"
          >
            <Icon icon={linkedin2} />
          </a>
        </li>
        <li>
          <a
            class="link"
            target="_blank"
            href="https://github.com/prathamesh4512"
          >
            <Icon icon={github} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
