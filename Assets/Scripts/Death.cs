using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
public class Death : MonoBehaviour {
	public GameObject DeathMenu;
	public GameObject Sheep_Demo;
	public void ToggleShowHide() {
		DeathMenu.SetActive(false);
		SceneManager.LoadScene("Level_1");
	}
}
