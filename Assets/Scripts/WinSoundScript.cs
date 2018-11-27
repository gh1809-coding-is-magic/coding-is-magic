using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WinSoundScript : MonoBehaviour
{

  [FMODUnity.EventRef]
  public string inputsound;
  bool playerWin;
  public float walkingspeed;

  void Update()
  {

  }

  void OnTriggerEnter(Collider other)
  {
    if (other.gameObject.name == "Plane")
    {
      FMODUnity.RuntimeManager.PlayOneShot(inputsound);
    }
  }

  void Start()
  {
    Invoke("CallFootsteps", 0);
  }

}
